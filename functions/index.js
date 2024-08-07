const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();
const db = admin.firestore();

const gmailEmail = 'akailash@gmail.com';
const gmailPassword = 'pjdoiygbmgztlsgd';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onCall(async (data, context) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const electivesSnapshot = await db.collection('electives').get();
    const basketCoursesSnapshot = await db.collection('basketCourses').get();

    const students = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const electives = electivesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const basketCourses = basketCoursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const studentsToRemind = students.filter(student => !student.selectedElective || !student.selectedBasketCourse);

    const emailsSent = [];
    const currentDateTime = new Date().toLocaleString();

    const emailPromises = studentsToRemind.map(student => {
      const mailOptions = {
        from: 'akailash@gmail.com', // Replace with your email
        to: student.email,
        cc: 'akailash@gmail.com',
        subject: `Reminder: Sign up for your courses! (${currentDateTime})`,
        text: generateEmailContent(student, electives, basketCourses),
      };
      emailsSent.push(`${student.name} (${student.email})`);
      return transporter.sendMail(mailOptions);
    });

    await Promise.all(emailPromises);

    return { emailsSent, count: emailsSent.length };
  } catch (error) {
    console.error('Error sending reminder emails:', error);
    throw new functions.https.HttpsError('internal', 'Error sending reminder emails');
  }
});

const generateEmailContent = (student, electives, basketCourses) => {
  let content = `Dear ${student.name},\n\nPlease sign up for your elective and basket courses as soon as possible.\n\nAvailable Elective Courses:\n`;
  electives.forEach(course => {
    content += `${course.electiveName} (${course.currentSeats}/${course.availableSeats} seats filled)\n`;
  });
  content += `\nAvailable Basket Courses:\n`;
  basketCourses.forEach(course => {
    content += `${course.courseName} (${course.currentSeats}/${course.availableSeats} seats filled)\n`;
  });
  content += `\nBest regards,\nYour College Admin`;
  return content;
};
