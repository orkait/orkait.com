export class ActionProvider {
  private setMessages: any;
  private sessionId: string;
  private backendUrl: string;

  constructor(setMessages: any) {
    this.setMessages = setMessages;
    this.sessionId = this.getSessionId();
    // Backend URL - always use production Workers URL for now
    this.backendUrl = 'https://orkait-chatbot.aconite.workers.dev';
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return 'server-session';
    
    let sessionId = localStorage.getItem('chatbot_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatbot_session_id', sessionId);
    }
    return sessionId;
  }

  private async addBotMessage(text: string) {
    const botMessage = {
      id: Date.now() + Math.random(), // Ensure uniqueness
      text,
      sender: "bot" as const,
      timestamp: new Date(),
    };
    this.setMessages((prev: any) => [...prev, botMessage]);
  }

  private async callLLM(userMessage: string): Promise<string> {
    try {
      const response = await fetch(`${this.backendUrl}/api/chatbot/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: this.sessionId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling chatbot API:', error);
      throw error;
    }
  }

  async handleDefault(userMessage: string) {
    // Add thinking indicator
    const thinkingId = Date.now();
    this.setMessages((prev: any) => [
      ...prev,
      {
        id: thinkingId,
        text: "💭 Thinking...",
        sender: "bot" as const,
        timestamp: new Date(),
      },
    ]);

    try {
      // Get AI response
      const aiResponse = await this.callLLM(userMessage);

      // Remove thinking indicator
      this.setMessages((prev: any) =>
        prev.filter((msg: any) => msg.id !== thinkingId)
      );

      // Add real response
      await this.addBotMessage(aiResponse);
    } catch (error) {
      // Remove thinking indicator
      this.setMessages((prev: any) =>
        prev.filter((msg: any) => msg.id !== thinkingId)
      );

      // Show error message
      await this.addBotMessage(
        "I'm sorry, I'm having trouble connecting right now. Please check that the backend server is running and try again."
      );
    }
  }

  // Fallback handlers - all route to LLM now
  handleHello() {
    this.handleDefault("Hello!");
  }

  handleServices() {
    this.handleDefault("Tell me about your services");
  }

  handleContact() {
    this.handleDefault("How can I contact you?");
  }

  handleAbout() {
    this.handleDefault("Tell me about Orkait");
  }

  handleHelp() {
    this.handleDefault("What can you help me with?");
  }
}
