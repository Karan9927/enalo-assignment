import Item from "antd/es/list/Item";
import "./App.css";
import { MenuProps } from "antd";
import {
  Form,
  Input,
  Button,
  message,
  Select,
  Typography,
  Dropdown,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [textMessage, settextMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid Email Address !";
    }

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully !");
      console.log("Form Data", name, email, department, timeSlot, message);
      setName("");
      setEmail("");
      setDepartment("");
      setTimeSlot("");
      settextMessage("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const deptchangeHandler = (value: string) => {
    setDepartment(value);
  };
  const timeSlotHandler = (value: string) => {
    setTimeSlot(value);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-10 sm:hidden">
        Book Appointment
      </h1>
      <div className="hidden sm:block text-center p-5">
        <h1 className="font-bold">Contact Us</h1>
        <h2 className="text-3xl font-bold mt-3">Make an Appointment</h2>
      </div>
      <Form className="px-12 sm:flex sm:flex-wrap sm:gap-10 sm:justify-center">
        <div className="sm:w-1/3">
          <h1 className="text-lg sm:hidden font-bold my-3">Name *</h1>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-100 font-bold px-5 py-3"
            required
            placeholder="Full Name *"
          />
        </div>
        <div className="sm:w-1/3 ">
          <h1 className="text-lg sm:hidden font-bold my-3">Email address *</h1>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 font-bold px-5 py-3"
            required
            placeholder="example@gmail.com"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="sm:w-1/3">
          <h1 className="text-lg sm:hidden font-bold my-3">Department *</h1>
          <Select
            style={{ height: "47px" }}
            placeholder="Please Select"
            onChange={deptchangeHandler}
            className="w-full"
            options={[
              { value: "BCA", label: "BCA" },
              { value: "BBA", label: "BBA" },
              { value: "MBA", label: "MBA" },
            ]}
          />
        </div>
        <div className="sm:w-1/3">
          <h1 className="text-lg sm:hidden font-bold my-3">Time *</h1>
          <Select
            style={{ height: "47px", backgroundColor: "#f3f4f5" }}
            onChange={timeSlotHandler}
            className="w-full bg-gray-100"
            placeholder="4:00 Available"
            options={[
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
            ]}
          />
        </div>
        <div className="sm:w-[69.5%] sm:block hidden">
          <TextArea
            value={textMessage}
            onChange={(e) => settextMessage(e.target.value)}
            classNames="bg-gray-100"
            style={{ backgroundColor: "#f3f4f5" }}
            placeholder="Message"
            className="font-bold"
            rows={5}
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full sm:w-1/3 p-8 mt-10"
          type="primary"
        >
          Book Appointment
        </Button>
      </Form>
    </div>
  );
}

export default App;
