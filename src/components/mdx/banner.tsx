export default function PostBanner({ ...props }: { children: React.ReactNode }) {
  return (
    <div className="prose-p:m-0 mb-8 rounded border border-gray-300 bg-gray-100 p-4">
      {props.children}
    </div>
  )
}
