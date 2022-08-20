export default function Footer() {
    return (<footer className="w-full bg-gray-400footer">
        <div className="text-center">
            <p>Hi footer</p>
        </div>
        <style jsx>
            {`.footer{
                position : absolute;
                bottom : 0;
             }
            `}
        </style>
    </footer>)
}