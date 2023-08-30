import Head from "next/head";




export default function Careers() {
  async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "19a2a0a2-559f-4473-b50a-2a038ddfa1c7");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }

return (
  <>
      <Head>
          <title>Careers</title>
          <meta name="description" content="" />
        </Head>
        <div className="page-content">
          <h1 className="text-center text-3xl m-8">Careers</h1>
        </div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  </>
);
}