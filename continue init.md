# Project Guide for CONTINUE.md

## Step 1: Check Required Tools

Before we begin, we need to verify that you have access to the necessary tools:

- **file_glob_search**: To discover project files
- **read_file**: To analyze file contents
- **ls**: To explore directory structure
- **create_new_file**: To generate the CONTINUE.md file

If any of these tools are unavailable, please activate them and enable "Agent Mode" in Continue before proceeding.

## Step 2: Project Analysis

We need to analyze your project structure and key files to understand:

- **Programming Languages and Frameworks**: What programming languages and frameworks are used in the project?
- **Overall Architecture and Organization**: What is the high-level architecture of the project? How is it organized?
- **Key Components and Their Responsibilities**: Identify the main components and what they are responsible for.
- **Important Configuration Files**: Which configuration files are crucial for the project?
- **Build/Deployment System**: What is the system used for building and deploying the project?

Once we have this information, we can move on to generating the CONTINUE.md file.

## Step 3: Generate CONTINUE.md

We will create a comprehensive CONTINUE.md file in the `.continue/rules/` directory with the following sections:

### 1. Project Overview

- **Project Purpose**: A brief description of what the project is supposed to do.
- **Key Technologies**: What programming languages and frameworks are used?
- **High-Level Architecture**: A high-level overview of the project's architecture.

### 2. Getting Started

- **Prerequisites**: List of required software and dependencies.
- **Installation Instructions**: How to install the project.
- **Basic Usage Examples**: How to use the project.
- **Running Tests**: How to run tests for the project.

### 3. Project Structure

- **Directory Overview**: An overview of the main directories and what they are used for.
- **Key Files**: What are the important files and what do they do?
- **Configuration Files**: Which configuration files are crucial for the project?

### 4. Development Workflow

- **Coding Standards**: Coding standards or conventions.
- **Testing Approach**: How the project is tested.
- **Build and Deployment Process**: How to build and deploy the project.
- **Contribution Guidelines**: How to contribute to the project.

### 5. Key Concepts

- **Domain-Specific Terminology**: Any specific terminology used in the project.
- **Core Abstractions**: What are the core abstractions in the project?
- **Design Patterns Used**: Which design patterns are used in the project?

### 6. Common Tasks

- **Step-by-Step Guides**: How to perform common tasks.
- **Examples of Common Operations**: Examples of common operations.

### 7. Troubleshooting

- **Common Issues**: Common issues and their solutions.
- **Debugging Tips**: Tips for debugging the project.

### 8. References

- **Links to Relevant Documentation**: Links to documentation for the project.
- **Important Resources**: Other important resources.

## Step 4: Finalize

After creating the `.continue/rules/CONTINUE.md` file, here's what we've done:

- Created a comprehensive guide to help developers understand and work with your project.
- Provided sections for project overview, getting started, project structure, development workflow, key concepts, common tasks, troubleshooting, and references.

Please review and edit the file as needed. Once you're satisfied, commit it to your repository to share it with your team. Continue will automatically load this file into context when working with the project.

Additionally, you can create additional `rules.md` files in subdirectories for more specific documentation related to those components.
