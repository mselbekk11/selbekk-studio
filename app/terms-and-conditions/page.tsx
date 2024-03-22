export default function Terms() {
  const Sections = [
    {
      title: 'Services Provided',
      content:
        'Selbekk Studio offers web design and development services, including but not limited to, website design, web development, maintenance, hosting, and consulting services. The specific services to be provided will be outlined in your service agreement or project proposal.',
    },
    {
      title: 'Service Agreement',
      content:
        'Upon agreeing to work with Selbekk Studio, clients will receive a service agreement or project proposal outlining the scope of work, project timeline, payment terms, and other relevant details. Clients are required to review and accept these terms before any work commences.',
    },
    {
      title: 'Payments and Billing',
      content:
        'Payment terms will be specified in the service agreement. Generally, Selbekk Studio either takes the payment in full or requires a deposit to commence work, with the balance due upon project completion or as agreed in the payment schedule. Late payments may incur additional charges or result in a suspension of services.',
    },
    {
      title: 'Client Responsibilities',
      content:
        'Clients are responsible for providing all necessary content, materials, and information required for the completion of the project. Clients must ensure that they have the rights to use any content or materials provided to Selbekk Studio.',
    },
    {
      title: 'Intellectual Property Rights',
      content:
        'Upon full payment, the final deliverables of the project (e.g., website design, code, graphics) will be transferred to the client. However, Selbekk Studio retains the right to use project designs, concepts, and related materials for its portfolio, promotional, and marketing purposes unless otherwise agreed upon.',
    },
    {
      title: 'Revisions and Acceptance',
      content:
        'The service agreement will specify the number of revisions or changes allowed within the scope of the project. Once the project is completed and delivered, the client will have a specified period to review and request any final adjustments.',
    },
    {
      title: 'Termination',
      content:
        'Either party may terminate the agreement with written notice if the other party breaches these terms and fails to correct the breach within a specified period. Termination terms, including any applicable fees or refunds, will be outlined in the service agreement.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'Selbekk Studio will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, arising out of or in connection with the use of our services.',
    },
    {
      title: 'Governing Law',
      content:
        'These terms and conditions are governed by the laws of the jurisdiction in which Selbekk Studio is registered. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of that jurisdiction.',
    },
    {
      title: 'Amendments',
      content:
        'Selbekk Studio reserves the right to modify these terms and conditions at any time. Your continued use of our services after any such changes constitutes your acceptance of the new terms.',
    },
  ];

  return (
    <div className='min-h-screen mx-auto max-w-[800px] flex flex-col items-center border-dotted border-x-2 py-8 px-6 text-left'>
      <div className='flex flex-col w-full'>
        <div className='pb-10'>
          <h1 className='text-2xl font-semibold pb-4'>
            Welcome to Selbekk Studio
          </h1>
          <p className='text-sm text-gray-500 pb-4'>
            Thank you for choosing Selbekk Studio for your web design and
            development needs. By accessing or using our services, you agree to
            be bound by the terms and conditions set forth below. If you do not
            agree with any part of these terms, please do not use our services.
          </p>
        </div>

        {Sections.map((item) => (
          <div key={item.title} className='pb-8'>
            <h2 className='text-lg font-semibold pb-2 underline'>
              {item.title}
            </h2>
            <p className='text-sm text-gray-500'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
