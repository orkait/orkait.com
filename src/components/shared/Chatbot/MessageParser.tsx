export class MessageParser {
  parse(message: string, actionProvider: any) {
    // Send all messages to the LLM backend
    actionProvider.handleDefault(message);
  }
}
