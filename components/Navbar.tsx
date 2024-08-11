import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="flex flex-col items-center w-16 py-8 space-y-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-2xl font-bold">W</div>
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-blue-400 rotate-90">
              Projects
            </a>
            <a href="#" className="rotate-90">
              Details
            </a>
            <a href="#" className="rotate-90">
              Articles
            </a>
            <a href="#" className="rotate-90">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <XIcon className="w-6 h-6" />
          <LinkedinIcon className="w-6 h-6" />
          <GitlabIcon className="w-6 h-6" />
        </div>
      </aside>
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <ArrowLeftIcon className="w-6 h-6" />
              <span>01</span>
            </div>
            <h1 className="text-4xl font-bold">Designing the future of education</h1>
            <p className="text-muted-foreground">
              Designing a platform to help educators build better online courseware
            </p>
          </div>
          <Button className="bg-blue-400 text-black">
            View project <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </main>
      <div className="relative flex items-center justify-center w-1/2">
        <img
          src="/placeholder.svg"
          alt="Project Image"
          className="w-full h-auto"
          width="600"
          height="400"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 right-0 text-6xl font-bold text-white">プロジェクト</div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}