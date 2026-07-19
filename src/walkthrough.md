# Services Carousel Active Image Visibility Optimization

I have successfully optimized the preview image visibility for active service chips inside `services-carousel.tsx`.

## Key Changes Made

### 1. Increased Active Image Opacity & Brightness
- Changed the preview card image configuration:
  * When active (`isActive`): Increased opacity class to **`opacity-90`** (from `65%`) and brightness to **`brightness-95`** (from `90%`). This ensures the screenshot is bright, clear, and stands out vividly behind the text overlay.
  * When inactive (`!isActive`): Kept opacity at `opacity-30` and `brightness-50` to maintain depth-of-field and focus transitions.

### 2. Verification & Deployment
- Built production package.
- Pushed changes to GitHub repository.
