# Team Member Photos

Add team member photos to this folder.

## Required Images

Please add the following images (JPG or PNG format, recommended size: 400x400px or square):

1. `ritik.jpg` - Ritik's photo
2. `kamal.jpg` - Kamal's photo
3. `kailas.jpg` - Kailas's photo
4. `suraj.jpg` - Suraj's photo
5. `intern-1.jpg` - Intern-1's photo
6. `intern-2.jpg` - Intern-2's photo
7. `marketing.jpg` - Marketing Guy's photo
8. `designer.jpg` - Designer's photo

## After Adding Images

Once you add the images, uncomment the `image:` lines in `src/constants/index.tsx` for each team member.

Example:
```typescript
{
  id: 1,
  name: "Ritik",
  currentRole: "SDE-2 at Dassault Systems",
  previousRoles: ["Carwale"],
  image: require("@site/static/images/team/ritik.jpg").default, // Uncomment this line
},
```

## Image Guidelines

- Format: JPG or PNG
- Size: 400x400px or square (will be displayed as 128x128px circles)
- Quality: High resolution for best display
- Style: Professional headshots work best

