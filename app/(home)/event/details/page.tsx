import React from "react";

export default function EventDetails() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <div className="w-full h-[25rem] flex justify-end relative">
        <img src="/images/ai.png" alt="" className="h-full" />
        <div className="absolute w-full h-full sm:p-20 p-10 flex flex-col gap-1">
          <div className="max-w-[45rem]">
            <h2 className="font-bold text-[1.2rem] sm:text-[2rem]">
              Exploring the Horizons of Innovation: Join Compass AI Session,
              powered by Bosch, as we shape the future of AI together.
            </h2>
          </div>

          <p className="text-sm">09/10/2024 | 7days</p>

          <div className="flex gap-1">
            <div className="w-[2rem] h-[2rem] rounded-full">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/027/951/130/small_2x/africa-guy-3d-avatar-character-illustrations-png.png"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">By</p>
              <p className="font-semibold"> Tom Parcker</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[55rem] flex flex-col gap-[4rem] p-4">
        <p>
          The world of artificial intelligence (AI) is evolving rapidly,
          influencing almost every sector of our lives, from healthcare to
          transportation and beyond. Compass AI Session powered by Bosch, held
          in Budapest, Hungary on October 31st, 2024, is part of the highly
          anticipated Compass Tech Summit – a premier global event that brings
          together innovators and thought leaders to share knowledge and explore
          new frontiers in technology.
        </p>

        <p className="">
          In 2024, Compass Tech Summit will feature several one-day conferences
          covering a range of cutting-edge topics, including AI, UX, and
          software development.‍‍ At this session, AI takes center stage. With
          advancements in machine learning, data analytics, and AI-powered
          systems, the technology is becoming an integral part of building a
          more sustainable and efficient future. Whether it’s revolutionizing
          smart cities, redefining automotive systems, or transforming
          healthcare practices, AI has the potential to solve some of the most
          pressing challenges we face today. Compass AI Session powered by Bosch
          offers an unmatched opportunity to immerse yourself in this world and
          learn from the top minds in the field
        </p>

        <div className="w-full max-h-[40rem]">
          <img
            src="https://www.juliacharleseventmanagement.co.uk/wp-content/uploads/2023/12/Employees-Enjoying-Xero-Conference-1024x576.jpg"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-[2rem]">Why You Should Attend</h1>
          <p>
            In an era where innovation is key, keeping up with AI trends is
            crucial for anyone looking to stay competitive in the tech industry.
            The Compass AI Session provides a unique platform to explore the
            latest developments and gain practical insights. Here are some key
            reasons to attend:
          </p>
        </div>
      </div>
    </div>
  );
}
