"use server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("Contact form submission:", {
    name,
    email,
    message,
  });

  // Simulate small delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}

