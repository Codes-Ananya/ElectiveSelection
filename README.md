"# ElectiveSelection" 
Elective Selection System

Overview

The Elective Selection System is a web-based application designed to facilitate the process of elective and basket course selection for students. The application allows students to view available courses, select their preferred electives and basket courses, and receive reminders for incomplete selections. Administrators can manage courses, monitor student selections, and generate reports.

Features
Student Features
    Login: Students can log in using their credentials.
    View Electives: Display a list of available elective courses.
    View Basket Courses: Display a list of available basket courses.
    Select Electives: Students can select and change their elective courses during an open selection session.
    Select Basket Courses: Students can select and change their basket courses during an open selection session.
    Real-Time Updates: Students receive real-time updates on seat availability.

Admin Features
    Login: Administrators can log in using their credentials.
    Dashboard: Admins can access a dashboard to monitor the selection process and seat availability.
    Manage Courses: Admins can add, update, and delete elective and basket course information.
    Open/Close Selection Sessions: Admins can open and close the elective and basket course selection sessions.
    Send Reminders: Admins can send email reminders to students who have not completed their selections.
    Generate Reports: Admins can generate signup summary reports showing the distribution of course signups.

Technology Stack

Frontend
    React: A JavaScript library for building user interfaces.
    React Router: For routing within the application.
    Bootstrap: For responsive and styled components.

Backend
    Firebase: A platform developed by Google for creating mobile and web applications.
        Firebase Authentication: For user authentication.
        Cloud Firestore: A NoSQL document database for storing and syncing data.
        Firebase Functions: For server-side logic such as sending emails.
        Firebase Hosting: For hosting the web application.

Email Service
    Nodemailer: A module for Node.js applications to allow easy email sending.

Installation and Setup
Prerequisites
    Node.js and npm installed.
    Firebase CLI installed.
    Git installed.

Steps
    Clone the Repository:


git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

Install Dependencies:

cd frontend
npm install

Update Firebase Configuration:

    Update frontend/src/firebaseConfig.js with your Firebase project details.

Update Firebase Functions:

    Navigate to the functions directory:

    cd ../functions
    npm install

    Update functions/index.js with your project details and email credentials.

Deploy Firebase Functions:

firebase deploy --only functions

Update Firestore Rules:

    Copy the Firestore rules provided and paste them into the Firestore rules tab in the Firebase console.

Run the Application Locally:

cd ../frontend
npm start

Deploy to Firebase Hosting:

    firebase deploy --only hosting

By following these steps, you will have a fully functional Elective Selection System deployed on Firebase.

This project is licensed under the MIT License.
