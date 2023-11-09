const Contact = ()=>{
    return(
        <div className="contact-container">
            <h1 className="text-center font-bold">Contact Us</h1>

            <form className="w-[30rem] m-auto my-4 flex flex-col border border-black p-4">
                <input type="text" className="border border-black border-1 text-center my-4" placeholder="Enter your name" />
                <textarea cols="2" rows="10" className="border border-black border-1" placeholder="Enter message here"></textarea>
                <button type="submit" className="border-2 border-black rounded-lg text-center font-bold m-4">Submit</button>
            </form>
        </div>
    );
};

export default Contact;