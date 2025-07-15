interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="gradient-modern py-20 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-lg">{title}</h1>
        <p className="text-xl text-slate-700 leading-relaxed drop-shadow-md font-medium">{description}</p>
      </div>
    </div>
  )
}
