// Define the lists of benefits
const benefitsNotGoing = [
    "Full control over your schedule.",
    "Avoid student debt.",
    "Start earning money earlier.",
    "Learn at your own pace.",
    "Focus on practical skills over theory.",
    "Can explore multiple careers quickly.",
    "No strict deadlines or exams.",
    "Travel while learning.",
    "Learn entrepreneurship early.",
    "Avoid unnecessary grades or GPA stress.",
    "Less exposure to peer pressure.",
    "More family time.",
    "Focus on physical fitness or hobbies.",
    "Can learn online from world experts.",
    "Tailor your education to your passion.",
    "Avoid toxic school politics.",
    "Develop self-discipline early.",
    "Avoid unnecessary uniforms or formalities.",
    "Can read more widely, not just the curriculum.",
    "Can start businesses or startups sooner.",
    "Learn financial literacy firsthand.",
    "Freedom from commuting.",
    "Avoid social cliques and bullying.",
    "More time to develop creativity.",
    "Freedom to work on real projects.",
    "Can intern early without waiting for graduation.",
    "Can invest time in networking.",
    "Opportunity to self-educate using free resources.",
    "Can learn multiple languages faster.",
    "Explore technology hands-on.",
    "Avoid rigid schedules that may not suit you.",
    "More mental flexibility.",
    "Can pursue unconventional careers (art, music, coding).",
    "Learn time management early.",
    "Can work with mentors directly.",
    "Learn negotiation skills in real life.",
    "Less anxiety from exams.",
    "Can take care of personal or family needs.",
    "Can volunteer and gain experience.",
    "Learn real-world problem-solving.",
    "Flexibility to live anywhere.",
    "Can develop passive income sources.",
    "Avoid formal testing stress.",
    "Can explore multiple passions at once.",
    "Freedom from institutional bureaucracy.",
    "Learn by doing, not just reading.",
    "Can specialize in niche skills early.",
    "More sleep and self-care.",
    "Can start building a professional portfolio early.",
    "Examples: Richard Branson, Steve Jobs, Mark Zuckerberg – all dropped out but became highly successful by learning directly from the world and building businesses."
];

const benefitsGoing = [
    "Structured learning environment.",
    "Access to professional teachers.",
    "Develop discipline through schedules.",
    "Receive recognized degrees.",
    "Networking opportunities with peers.",
    "Exposure to diverse ideas and cultures.",
    "Access to libraries and resources.",
    "Develop social skills.",
    "Opportunities for internships and placement.",
    "Safety net for career guidance.",
    "Exposure to group projects and teamwork.",
    "Learn to manage deadlines.",
    "Build lifelong friendships.",
    "Opportunity to attend seminars and workshops.",
    "Access to scholarships and funding.",
    "Support in preparing for certifications.",
    "Build credibility with employers.",
    "Develop research skills.",
    "Exposure to competitions and challenges.",
    "Learn leadership in student organizations.",
    "Develop public speaking skills.",
    "Gain exposure to extracurriculars (sports, music, art).",
    "Can study advanced topics not accessible online.",
    "Networking with professors can lead to mentorship.",
    "Participate in cultural and social events.",
    "Develop time management skills.",
    "Safe environment to explore failures.",
    "Learn structured problem-solving.",
    "Access to labs and practical tools.",
    "Guidance in career planning.",
    "Can apply for higher studies later.",
    "Exposure to internships via college placements.",
    "Develop teamwork and collaboration.",
    "Exposure to debates and discussion forums.",
    "Exposure to technology and innovation labs.",
    "Develop accountability and responsibility.",
    "Opportunities for study abroad programs.",
    "Gain formal recognition for skills.",
    "Support for mental health services.",
    "Access to alumni networks.",
    "Opportunities for competitions, hackathons, contests.",
    "Exposure to guest lectures from industry experts.",
    "Structured evaluation helps identify strengths and weaknesses.",
    "Learning soft skills like etiquette, negotiation, presentation.",
    "Provides stability and fallback career options.",
    "Learning under pressure helps mental resilience.",
    "Access to official internships and projects.",
    "Can build a professional portfolio.",
    "Examples: Barack Obama, Sundar Pichai, Oprah Winfrey – formal education provided networking, guidance, and credentials that helped them rise.",
    "Provides a broad foundation in critical thinking and general knowledge."
];

// Button click event
document.getElementById("btn").addEventListener("click", function () {
    const imageContainer = document.getElementById("imageContainer");

    // Clear any existing content
    imageContainer.innerHTML = "";

    // Define the options mapping images to their respective benefits
    const options = [
        { src: "image1.png", list: benefitsNotGoing },
        { src: "image2.png", list: benefitsGoing }
    ];

    // Pick a random option (0 or 1)
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];

    // Create and append the image
    const img = document.createElement("img");
    img.src = selectedOption.src;
    img.alt = "Result Image";
    // Let CSS handle the styling (width, shadow, animation)
    imageContainer.appendChild(img);

    // Pick a random quote/benefit from the selected list
    const randomQuoteIndex = Math.floor(Math.random() * selectedOption.list.length);
    const quoteText = selectedOption.list[randomQuoteIndex];

    // Create and append the quote
    const quoteElement = document.createElement("p");
    quoteElement.textContent = quoteText;
    quoteElement.style.marginTop = "20px";
    quoteElement.style.fontSize = "1.2rem";
    quoteElement.style.fontWeight = "500";
    quoteElement.style.textAlign = "center";
    quoteElement.style.color = "#333";
    // Match the image animation
    quoteElement.style.opacity = "0";
    quoteElement.style.animation = "fadeIn 0.6s forwards 0.3s"; // Slight delay for text? or same? Let's do same or slight delay.

    imageContainer.appendChild(quoteElement);
});
