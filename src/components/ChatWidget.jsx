import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "What are your fees?",
  ];

  // Mock LLM response function
  const getMockResponse = (question) => {
    const responses = {
      "How do I sell my license?": "To sell your license, simply click the 'Sell My Licenses' button and follow these steps:\n1. Upload your license details\n2. Get an instant valuation\n3. Accept the offer\n4. Receive payment within 24 hours",
      "What types of licenses do you accept?": "We accept various types of software licenses including:\n- Microsoft licenses\n- Adobe licenses\n- Autodesk licenses\n- And many more! Contact us for specific inquiries.",
      "How long does the process take?": "The entire process typically takes 24-48 hours:\n- Instant valuation\n- Quick review process\n- Fast payment transfer",
      "What are your fees?": "Our fees are competitive and transparent:\n- No upfront costs\n- Small commission on successful sales\n- No hidden fees",
    };

    return responses[question] || "I'm sorry, I don't have information about that. Please contact our support team for more details.";
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', content: message }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      const response = getMockResponse(message);
      setMessages([...newMessages, { type: 'bot', content: response }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col"
          >
            <div className="p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with us</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">We're here to help!</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-1 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex flex-wrap gap-2 mb-3">
                {exampleQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSendMessage(question)}
                    className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(inputValue)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget; 