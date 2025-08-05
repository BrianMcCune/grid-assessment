# React + TypeScript + Vite
## 🧠 Problem Summary

- Create a 3x3 grid.
- Highlight one selected box.
- Move the selected box using "Up", "Down", "Left", and "Right" buttons.
- Handle wrapping logic (e.g., moving left from box 0 jumps to box 8).

---

## ⚙️ Tech & Tools

- React with TypeScript
- `useState` for tracking the current box

---

## ✅ Logic Highlights

```tsx
const handleClick = (action: 'up' | 'down' | 'left' | 'right') => {
  setBox((prev) => {
    switch(action) {
      case 'up':
        return prev === 2 ? 8 : prev - 3
      case 'down':
        return (prev + 3) % 9
      case 'left':
        return prev === 0 ? 8 : prev - 1
      case 'right':
        return (prev + 1) % 9
    }
  })
}
