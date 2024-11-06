export default function CardItem({ children, className = '', ...props }: any) {
    return (
        <div {...props} className={`w-full bg-white border border-gray-200 rounded ` + className}>
            {children}
        </div>
    )
}