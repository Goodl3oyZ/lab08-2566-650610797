import { Header } from "../../Components/Header";
import { Taskinput } from "../../Components/Taskinput";
import { Task } from "../../Components/Task";
import { Footer } from "../../Components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Phanudet Sueaphueak"
        studentId="650610797"
      />
    </div>
  );
}
