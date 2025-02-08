import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

const experiences = [
    {
        company: "10 Pearls",
        position: "Data Science Intern",
        duration: "Nov 2024 – Jan 2025",
        responsibilities: [
            "Developed an AQI prediction system, improving forecast accuracy by 82% using Random Forest, Ridge Classification, and Logistic Regression.",
            "Engineered a feature pipeline integrating real-time weather and pollutant data from OpenWeather API, optimizing data processing efficiency.",
            "Built an interactive Streamlit web app for real-time AQI visualization, enhancing user engagement.",
            "Automated data pipeline using GitHub Actions and Hopsworks Feature Store, ensuring seamless model retraining.",
            "Integrated SHAP/LIME for explainable AI and used Seaborn for data visualization.",
        ],
    },
];

return (
    <div
        id="Experience"
        className="bg-[#fafafa] text-black dark:bg-[#161616] dark:text-white lg:px-56 px-10 py-20 text-center           lg:text-start flex flex-col justify-center items-center"
    >
        <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-12 leading-normal text-lime-400 uppercase"
        >
            Experience
        </h1>

        {experiences.map((exp, index) => (
            <div
                key={index}
                className="w-full lg:w-3/4 bg-white dark:bg-[#1e1e1e] shadow-xl p-8 rounded-lg border-2 border-lime-400 transition-shadow duration-300 hover:shadow-[0_0_12px_rgba(255,_255,_0,_0.6)] mb-6"
                data-aos="fade-up"
            >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {exp.position}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                        <li key={i} className="mb-2">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);
}

export default Experience;
