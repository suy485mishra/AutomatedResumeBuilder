//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbot from '../assets/img/chatbot.jpg';
const steps = [
    {
      id: '0',
      message: 'Hey there! I\'m the assistant for our technical club website. How can I assist you today?',
      trigger: '1',
    },
    {
      id: '1',
      options: [
        { value: 'about', label: 'About Us', trigger: 'about' },
        { value: 'contact', label: 'Contact Us', trigger: 'contact' },
        { value: 'events', label: 'Upcoming Events', trigger: 'events' },
        { value: 'resources', label: 'Technical Resources', trigger: 'resources' },
        { value: 'feedback', label: 'Feedback/Suggestions', trigger: 'feedback' },
      ],
    },
    {
      id: 'about',
      message: 'Our technical club is dedicated to fostering a vibrant community of tech enthusiasts, learners, and innovators. We provide a platform for collaboration, exploration, and skill development. Would you like to know more about our club\'s mission, history, or members?',
      trigger: 'about-options',
    },
    {
      id: 'about-options',
      options: [
        { value: 'mission', label: 'Mission and Goals', trigger: 'mission' },
        { value: 'history', label: 'Club History', trigger: 'history' },
        { value: 'members', label: 'Meet Our Members', trigger: 'members' },
        { value: 'back', label: 'Go Back', trigger: '1' },
      ],
    },
    {
      id: 'mission',
      message: 'Our mission is to inspire the next generation of tech leaders, provide continuous learning opportunities, and foster a collaborative environment for innovation and creativity.',
      trigger: 'about-options',
    },
    {
      id: 'history',
      message: 'Our club was founded in [year] with the vision of [brief history]. Since then, we have been actively organizing various events, workshops, and activities to promote technology and innovation.',
      trigger: 'about-options',
    },
    {
      id: 'members',
      message: 'Our club consists of a diverse community of tech enthusiasts, learners, and professionals from different backgrounds. Each member brings unique skills, perspectives, and experiences to our club.',
      trigger: 'about-options',
    },
    {
      id: 'contact',
      message: 'You can reach out to us via email at [email] or visit our contact page [link] for more information. How can we assist you further?',
      trigger: '1',
    },
    {
      id: 'events',
      message: 'Check out our upcoming events and activities on our events page [link]. We host a variety of events including workshops, hackathons, and guest lectures. Don\'t miss out on the opportunity to enhance your skills and connect with like-minded individuals!',
      trigger: '1',
    },
    {
      id: 'resources',
      message: 'Explore our collection of technical resources, tutorials, and project ideas on our resources page [link]. Whether you\'re a beginner or an experienced developer, you\'ll find valuable resources to enhance your skills and knowledge.',
      trigger: '1',
    },
    {
      id: 'feedback',
      message: 'We value your feedback and suggestions! Please share your thoughts, ideas, or any issues you encountered while browsing our website. Your feedback helps us improve and provide a better experience for our users.',
      trigger: '1',
    },
  ];
  

// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };
  
// Set some properties of the bot
const config = {
	botAvatar: chatbot,
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="ChatBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
