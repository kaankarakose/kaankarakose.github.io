class TypeWriter {
    constructor(textElement, words, wait = 1000) {
        this.textElement = textElement;
        this.fullText = words;
        this.currentPosition = 0;
        this.wait = parseInt(wait, 10);
        this.typeSpeed = 50; // Initial typing speed
        this.type();
        this.isComplete = false;
    }

    type() {
        if (this.isComplete) return;
        
        // Get current text
        const currentText = this.fullText.substring(0, this.currentPosition);
        
        // Add next character
        this.currentPosition++;
        
        // Insert txt into element with a blinking cursor, preserving line breaks
        this.textElement.innerHTML = `<span class="txt">${currentText.replace(/\n/g, '<br>')}</span><span class="cursor">|</span>`;

        // If we haven't reached the end
        if (this.currentPosition <= this.fullText.length) {
            setTimeout(() => this.type(), this.typeSpeed);
        } else {
            // Typing is complete
            this.complete();
        }
    }

    complete() {
        this.isComplete = true;
        this.textElement.classList.add('complete');
        setTimeout(() => {
            // Remove the cursor when done
            const cursor = this.textElement.querySelector('.cursor');
            if (cursor) cursor.style.display = 'none';
        }, 1000);
    }

    turboMode() {
        // Increase speed of typeSpeed
        this.typeSpeed = 5; // Minimum speed of 500ms
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const contentSection = document.querySelector('.page__content');
    if (contentSection) {
        // Hide the original content temporarily
        const originalContent = contentSection.innerHTML;
        contentSection.innerHTML = '';
        
        // Create a container for typewriter and turbo button
        const container = document.createElement('div');
        container.className = 'typewriter-container';
        
        // Create a new div for the typewriter effect
        const typewriterDiv = document.createElement('div');
        typewriterDiv.className = 'typewriter-effect';
        
        // Create turbo button
        const turboButton = document.createElement('button');
        turboButton.className = 'skip-button';
        turboButton.textContent = 'Turbo!';
        
        // Add elements to container
        container.appendChild(typewriterDiv);
        container.appendChild(turboButton);
        contentSection.appendChild(container);
        
        // Get the text content from the original content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalContent;
        
        // Process nodes to preserve structure
        function processNode(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                return node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                if (['LINK', 'SCRIPT'].includes(node.tagName)) {
                    return '';
                }
                if (node.tagName === 'P') {
                    return node.textContent + '\n\n';
                }
                if (node.tagName === 'BR') {
                    return '\n';
                }
                return node.textContent;
            }
            return '';
        }

        const text = Array.from(tempDiv.childNodes)
            .map(processNode)
            .join('')
            .replace(/\n\n\n+/g, '\n\n') // Replace multiple line breaks with double line break
            .trim();
        
        // Start the typewriter effect
        const typewriter = new TypeWriter(typewriterDiv, text);
        
        // Add turbo button functionality
        turboButton.addEventListener('click', () => {
            typewriter.turboMode();
            // Visual feedback for turbo mode
            turboButton.style.backgroundColor = '#ffd700';
            turboButton.textContent = '🚀 Turbo!';
            setTimeout(() => {
                turboButton.style.backgroundColor = '#f8f9fa';
                turboButton.textContent = 'Turbo!';
            }, 200);
            turboButton.style.display = 'none';
        });

        // After typing is complete (approximately text.length * initial typeSpeed + buffer)
        setTimeout(() => {
            if (!typewriter.isComplete) {
                contentSection.innerHTML = originalContent;
                turboButton.style.display = 'none';
            }
        }, text.length * 80 + 2000); // Add 2 seconds buffer
    }
}
