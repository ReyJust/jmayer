import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jusmayer@outlook.com",
      href: "mailto:jusmayer@outlook.com",
      color: "bg-red-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(+230) 5 921 3244",
      href: "tel:+23059213244",
      color: "bg-green-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "@ReyJust",
      href: "https://github.com/ReyJust",
      color: "bg-gray-800 dark:bg-gray-600",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "Justin Mayer",
      href: "https://www.linkedin.com/in/jpjmayer/",
      color: "bg-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div
                    className={`${contact.color} text-white p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {contact.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Connect With Me
            </h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div
                    className={`${social.color} text-white p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {social.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
