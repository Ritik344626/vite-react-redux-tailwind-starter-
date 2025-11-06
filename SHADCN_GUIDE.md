# shadcn/ui Setup Guide

## ✅ Migration Complete!

Your project has been successfully migrated from Material-UI to Tailwind CSS + shadcn/ui!

## What's Been Changed

### Removed
- ❌ @mui/material
- ❌ @mui/icons-material
- ❌ @emotion/react
- ❌ @emotion/styled

### Added
- ✅ Tailwind CSS v3
- ✅ PostCSS & Autoprefixer
- ✅ shadcn/ui core dependencies (clsx, tailwind-merge, class-variance-authority)
- ✅ lucide-react (icon library)

## Configuration Files

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `src/utils/index.ts` - Includes `cn()` utility for merging class names

## Using Tailwind CSS

You can now use Tailwind utility classes directly in your components:

```tsx
<div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg">
  Hello Tailwind!
</div>
```

### Responsive Design
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### Hover & States
```tsx
<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors">
  Click me
</button>
```

## Adding shadcn/ui Components

shadcn/ui components are not installed via npm. Instead, you copy them into your project.

### Manual Installation (Recommended for learning)

1. Visit [ui.shadcn.com](https://ui.shadcn.com)
2. Browse the components
3. Click on a component (e.g., Button)
4. Copy the component code into your project

### CLI Installation (Faster)

First, install the shadcn/ui CLI globally:
```bash
npx shadcn@latest add button
```

This will:
- Download the Button component
- Place it in `src/components/ui/button.tsx`
- Install any required dependencies

### Available Components

Common components you can add:
- `button` - Buttons with variants
- `card` - Card component
- `input` - Input fields
- `dialog` - Modal dialogs
- `dropdown-menu` - Dropdown menus
- `toast` - Toast notifications
- `form` - Form components
- `table` - Data tables
- And many more!

## Example: Adding a Button Component

```bash
npx shadcn@latest add button
```

Then use it in your code:

```tsx
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <div className="p-4">
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}
```

## Using Icons with lucide-react

```tsx
import { Home, User, Settings } from "lucide-react"

function NavBar() {
  return (
    <nav className="flex gap-4 p-4">
      <Home className="w-6 h-6" />
      <User className="w-6 h-6" />
      <Settings className="w-6 h-6" />
    </nav>
  )
}
```

Browse all icons at: [lucide.dev](https://lucide.dev)

## Using the `cn()` Utility

The `cn()` function (already set up in `src/utils/index.ts`) helps merge Tailwind classes:

```tsx
import { cn } from "@/utils"

function MyComponent({ className, isActive }: { className?: string, isActive?: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-lg",
      isActive && "bg-blue-500 text-white",
      className
    )}>
      Content
    </div>
  )
}
```

## Customizing Theme

Edit `tailwind.config.js` to customize colors, spacing, fonts, etc:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4285F4',
        secondary: '#27C59A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
}
```

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## Next Steps

1. ✅ Server is running at http://localhost:3031
2. Start adding shadcn/ui components with `npx shadcn@latest add <component>`
3. Build your UI with Tailwind utility classes
4. Explore the shadcn/ui documentation for component examples

Happy coding! 🚀
