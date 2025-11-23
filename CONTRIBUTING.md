# Contributing to Capsule Corporation

Thank you for your interest in contributing! Here are some ways you can help:

## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in Issues
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/device information

### Suggesting Features
1. Discuss the feature idea in Issues
2. Include:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/capsule-corporation.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Keep changes focused and atomic

4. **Test your changes**
   ```bash
   npm run check    # Type checking
   npm run dev:client  # Local testing
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Reference any related issues
   - Describe what changed and why
   - Include screenshots for UI changes

## Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Format code with Prettier (if configured)

## Project Structure

- `/client/src/pages` - Page components
- `/client/src/components` - Reusable components
- `/client/src/lib` - Utilities and helpers
- `/client/src/index.css` - Global styles

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev:client

# Type checking
npm run check

# Build for production
npm run build
```

## Commit Message Guidelines

- Use present tense: "Add feature" not "Added feature"
- Use imperative mood: "Move cursor to..." not "Moves cursor to..."
- Limit the first line to 72 characters
- Reference issues when applicable: "Fix #123"

## Questions?

Feel free to open an issue with the `question` label.

---

Thank you for contributing to Capsule Corporation! 🎉
