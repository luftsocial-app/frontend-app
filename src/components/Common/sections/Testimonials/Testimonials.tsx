import React from "react";

const TestimonialCard = ({
  username,
  handle,
  content,
}: {
  username: string;
  handle: string;
  content: string;
}) => (
  <div className="bg-purple-50 rounded-xl p-6 space-y-4 max-w-56 h-auto ">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-300">
        <img
          src="/api/placeholder/40/40"
          alt={username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-purple-600">{username}</h3>
        <p className="text-gray-500 text-sm">{handle}</p>
      </div>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export function Testimonials() {
  const testimonials = [
    {
      username: "Hikmet Atceken",
      handle: "@hatceken",
      content:
        "I love how simple it is to set up and manage my automations. The analytics are a game-changer!",
    },
    {
      username: "Hikmet Atceken",
      handle: "@hatceken",
      content:
        "I can't imagine managing social media without this platform. It's incredible and highly efficient! It's incredible and highly efficient!",
    },
    {
      username: "Hikmet Atceken",
      handle: "@hatceken",
      content:
        "I can't imagine managing social media without this platform. It's incredible and highly efficient! It's incredible and highly efficient!",
    },
    {
      username: "Hikmet Atceken",
      handle: "@hatceken",
      content:
        "I love how simple it is to set up and manage my automations. The analytics are a game-changer!",
    },
    {
      username: "Hikmet Atceken",
      handle: "@hatceken",
      content:
        "I can't imagine managing social media without this platform. It's incredible and highly efficient! It's incredible and highly efficient!",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-purple-600 font-semibold mb-4">TESTIMONIALS</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          What Our Users Say
        </h1>
      </div>

      <div className="flex gap-12 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            username={testimonial.username}
            handle={testimonial.handle}
            content={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
}
