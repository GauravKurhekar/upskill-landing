import { Metadata } from "next";
import CourseHero from "@/components/course/CourseHero";
import CourseRoadmapInteractive from "@/components/course/CourseRoadmapInteractive";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import CourseFeatures from "@/components/course/CourseFeatures";
import CourseInstructor from "@/components/course/CourseInstructor";
import CourseCTA from "@/components/course/CourseCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopNotificationBar from "@/components/TopNotificationBar";
import { fetchGraphyCourse } from "@/lib/graphy";

export const metadata: Metadata = {
  title: "Azure Data Engineering Course | UpSkill Academy",
  description:
    "Master Azure Data Engineering with hands-on projects. Learn Azure Cloud, Databricks, PySpark, Data Factory, Synapse Analytics and more.",
};

export default async function CoursePage() {
  const courseId = process.env.GRAPHY_COURSE_ID || "6870e4c48934024a7cb52be6";
  const courseData = await fetchGraphyCourse(courseId);

  // Fallback data if API fails
  const fallbackData = {
    id: courseId,
    name: "Welcome to Cloud & Big Data Engineering Course",
    description: "Master the art of building secure and scalable data pipelines in the cloud with Upskill Academy's Azure Data Engineering Course.",
    price: 0,
    currency: "INR",
    thumbnail: "https://via.placeholder.com/1200x600",
    instructor: {
      name: "Gaurav Kurhekar",
      image: "https://ik.imagekit.io/a0ivf97jq/alop.png?updatedAt=1764168497635",
    },
    modules: [
      { id: "1", title: "Introduction to Big Data", order: 1, lessons: [] },
      { id: "2", title: "Azure Cloud Fundamentals", order: 2, lessons: [] },
      { id: "3", title: "Data Storage on Azure Cloud", order: 3, lessons: [] },
      { id: "4", title: "SQL and Azure SQL", order: 4, lessons: [] },
      { id: "5", title: "Python Basics", order: 5, lessons: [] },
      { id: "6", title: "Introduction to Hadoop", order: 6, lessons: [] },
      { id: "7", title: "Spark and Deep dive into Spark Architecture", order: 7, lessons: [] },
      { id: "8", title: "Introduction To Databricks", order: 8, lessons: [] },
      { id: "9", title: "Working with Databricks Filesystem – DBFS", order: 9, lessons: [] },
      { id: "10", title: "Spark DataFrame Reading APIs and Databricks", order: 10, lessons: [] },
      { id: "11", title: "Spark DataFrame Transformation and Databricks", order: 11, lessons: [] },
      { id: "12", title: "Spark SQL in Databricks", order: 12, lessons: [] },
      { id: "13", title: "Mounting Storage in Databricks", order: 13, lessons: [] },
      { id: "14", title: "Databricks Utilities and Widgets", order: 14, lessons: [] },
      { id: "15", title: "Notebook Integration & Connectivity", order: 15, lessons: [] },
      { id: "16", title: "Databricks Cluster Management", order: 16, lessons: [] },
      { id: "17", title: "Spark Join Optimization and Performance Tuning", order: 17, lessons: [] },
      { id: "18", title: "Spark Performance & Memory Management", order: 18, lessons: [] },
      { id: "19", title: "Delta Lake & Data Lakehouse", order: 19, lessons: [] },
      { id: "20", title: "Databricks New Features", order: 20, lessons: [] },
      { id: "21", title: "Spark Streaming", order: 21, lessons: [] },
      { id: "22", title: "Unity Catalog in Databricks", order: 22, lessons: [] },
      { id: "23", title: "Databricks Workflows", order: 23, lessons: [] },
      { id: "24", title: "Azure Data Factory", order: 24, lessons: [] },
      { id: "25", title: "Azure Key Vaults", order: 25, lessons: [] },
      { id: "26", title: "Data Warehousing using Synapse Analytics", order: 26, lessons: [] },
      { id: "27", title: "Microsoft Fabric", order: 27, lessons: [] },
      { id: "28", title: "Introduction to Agile Methodology", order: 28, lessons: [] },
      { id: "29", title: "Introduction to JIRA for Agile", order: 29, lessons: [] },
      { id: "30", title: "End-to-end project of azure data engineering", order: 30, lessons: [] },
    ],
    features: [
      "Azure Cloud, Azure SQL, Python, PySpark",
      "Databricks, Azure Data Factory",
      "Azure Synapse Analytics, Azure Data Lake",
      "Spark, Spark Streaming",
      "Azure DevOps (CI/CD)",
      "Agile Methodologies",
    ],
    language: "English",
    students: 1000,
    rating: 4.8,
    duration: "40+ hours",
  };

  const course = courseData || fallbackData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <TopNotificationBar />
      <Navbar />
      <CourseHero course={course} />
      <CourseRoadmapInteractive />
      <CourseFeatures course={course} />
      <CourseCurriculum modules={course.modules} />
      <CourseInstructor instructor={course.instructor} />
      <CourseCTA course={course} />
      <Footer />
    </main>
  );
}
