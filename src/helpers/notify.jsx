import toast from "react-hot-toast";

const notify = (msg, type = "success") => toast[type](msg);

export default notify;
