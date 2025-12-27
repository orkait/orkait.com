# Pricing Configuration Guide

This document explains how to configure the new pricing system for Orkait services.

## Overview

The pricing system now supports **category-based pricing** with clickable tabs. Each category can have up to 5 pricing tiers (cards), and everything is fully configurable via the constants file.

## Configuration Location

All pricing configuration is in: `src/constants/index.tsx`

## Structure

### 1. Service Categories

Define your service categories in the `serviceCategories` array:

```typescript
export const serviceCategories: ServiceCategory[] = [
  {
    id: "app-development",           // Unique identifier (used internally)
    name: "App Development",          // Full name
    label: "Mobile & Web Apps"        // Display label on the tab button
  },
  // Add more categories...
]
```

### 2. Service Pricing

Configure pricing tiers for each category in the `servicePricing` array:

```typescript
export const servicePricing: ServicePricing[] = [
  {
    categoryId: "app-development",  // Must match a category id
    tiers: [
      {
        id: 1,
        name: "Starter",                          // Tier name
        price: "Starting at $2,500",              // Price display
        priceSubtext: "One-time payment",         // Optional subtext
        description: "Perfect for MVPs...",       // Optional description
        features: [                               // List of features
          { id: 1, name: "Feature description" },
          // Add more features...
        ],
        buttonText: "Get Started",                // CTA button text
        buttonHref: "/contact",                   // CTA button link
        highlighted: false                        // Set to true for "Most Popular"
      },
      // Add more tiers (up to 5 recommended)...
    ]
  },
  // Add pricing for other categories...
]
```

## How to Customize

### Add a New Service Category

1. Add a new entry to `serviceCategories`:
```typescript
{
  id: "consulting",
  name: "Consulting Services",
  label: "Expert Consulting"
}
```

2. Add corresponding pricing in `servicePricing`:
```typescript
{
  categoryId: "consulting",
  tiers: [
    // Define your pricing tiers...
  ]
}
```

### Modify Existing Pricing

Simply edit the values in the `servicePricing` array. All changes are reflected immediately.

### Add/Remove Pricing Tiers

Add or remove tier objects from the `tiers` array. You can have 1-5 tiers per category.

### Highlight a Tier

Set `highlighted: true` on any tier to make it stand out as "Most Popular". Only one tier per category should be highlighted.

## Type Definitions

All types are defined in `src/types/index.d.ts`:

- `ServiceCategory`: Category tab configuration
- `PricingTier`: Individual pricing card
- `ServicePricing`: Connects categories to their pricing tiers

## Component Location

The pricing component is located at: `src/components/enterprise/NewPricing.tsx`

## Features

- ✅ Fully responsive design
- ✅ Clickable category tabs
- ✅ Configurable number of tiers (1-5 per category)
- ✅ Highlight feature for popular tiers
- ✅ Analytics tracking for all interactions
- ✅ Smooth transitions between categories
- ✅ All content configurable via constants

## Best Practices

1. Keep tier names concise (1-2 words)
2. Price should include "Starting at" for flexibility
3. Limit features to 5-8 per tier for readability
4. Use highlighted sparingly (1 per category max)
5. Ensure all category IDs are unique and match between arrays

