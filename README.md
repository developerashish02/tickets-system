# Support System for End Users

This project is a support system for end users, allowing them to create tickets, interact with tech support, and for admins to manage the support process.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone [https://github.com/developerashish02/tickets-system]
   ```

2. Navigate to the project directory:
   cd support-system

3. Install dependencies:
   npm install

4. Start the JSON Server for the backend (make sure it runs on port http://localhost:3000):
   json-server --watch db.json

5. Start the Vite development server:
   npm run dev

Usage

End User:

- Log in or register.
- Create a ticket (with optional file attachment) to query and reply to answers from tech support.
- Mark tickets as close/resolved.

Tech Support:

- Answer any assigned ticket with a file attachment.
- Mark tickets as close/resolved.

Admin:

- Assign/change tech support to tickets.
- Close/resolve tickets.

Technologies Used

- React.js
- Context API / Redux Toolkit
- React-router-dom
- Tailwind CSS / Responsive UI Design
- JSON Server

Contributors

- Ashish Gaikwad
