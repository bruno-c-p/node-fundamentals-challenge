# NodeTasks

This repository contains the solution for the Node.js Fundamentals Challenge from the Ignite Node.js track by Rocketseat. The project is a Task Manager API that implements CRUD operations for managing tasks with additional features like marking tasks as complete and importing tasks in bulk using a CSV file.

Features

- Create Tasks: Add new tasks by providing a title and description.
- List Tasks: Retrieve all tasks, with optional search functionality for filtering by title or description.
- Update Tasks: Modify the title and/or description of a task by its ID.
- Delete Tasks: Remove tasks by their ID.
- Mark as Complete: Toggle the completion status of a task.
- Import Tasks via CSV: Bulk create tasks by importing a CSV file.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,pnpm)](https://skillicons.dev)

## Prerequisites

- Node.js
- pnpm
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-fundamentals-challenge.git
   cd node-fundamentals-challenge
   ```
2. Install dependencies:
   ```bash
    pnpm install
   ```
3. Start the server:
   ```bash
    pnpm run dev
   ```
4. The API will be available at http://localhost:3000.
5. To test the csv parser run `node csv-stream.js` with the api running.
