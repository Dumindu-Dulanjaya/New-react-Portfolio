# Services Preview Local Screenshots & Opacity Upgrade

I have successfully imported your actual project screenshots and updated the preview display inside the Services Carousel (`services-carousel.tsx`) with higher visibility.

## Key Changes Made

### 1. Mapped Local Screenshots
- Imported `anawuma`, `sanota`, `vms`, and `knoweb` from `../../assets/`.
- Mapped them to:
  * **Frontend Development**: `knoweb.png`
  * **Backend Development**: `anawuma.png`
  * **UI/UX Design**: `sanota.png`
  * **DevOps & Cloud**: `vms.png`

### 2. Enhanced Image Contrast & Opacity
- Changed background preview card image opacity parameter from `opacity-30` to `opacity-65`.
- Updated active item filter from `brightness-75` to `brightness-90` to render the screenshots with clear visibility.

### 3. Verification & Deployment
- Built production package.
- Pushed changes to GitHub repository.
