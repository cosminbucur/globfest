Objective: I want to sell hand painted Christmas baubles.

Site name: Globfest.ro
Language: Romanian and English
Tech: Astro, React, Tailwind CSS, TypeScript, pnpm

Task: Create a beautiful landing page for a Christmas theme online store.

Components:

- header with logo, navigation links, and a call-to-action button
- hero section with a headline, subheadline, and a call-to-action button
- about section with a headline, subheadline, and a call-to-action button
- products section with a headline, subheadline, and a call-to-action button
- contact section with a headline, subheadline, and a call-to-action button
- footer with social links and copyright information (© 2025 Globfest. All rights reserved.)

# setup

```sh
# setup project with tailwind
pnpm create astro@latest globfest
cd globfest
pnpm install
pnpm add -D tailwindcss postcss autoprefixer
pnpm astro add tailwind

# react
pnpm astro add react

# shadcn
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dlx shadcn@latest init -y
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dlx shadcn@latest add button -y
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dlx shadcn@latest add input -y

# icons
pnpm add iconoir-react

```
