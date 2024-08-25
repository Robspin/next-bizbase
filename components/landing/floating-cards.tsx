"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'


const randomPeople: string[] = [
    'Alice Johnson - Software Engineer',
    'Michael Smith - Product Manager',
    'Emily Davis - UX Designer',
    'James Brown - Data Scientist',
    'Sarah Wilson - Marketing Director',
    'David Clark - Sales Manager',
    'Laura Miller - HR Specialist',
    'Daniel Lee - CTO',
    'Sophia Martinez - Business Analyst',
    'Christopher Taylor - COO',
    'John Dennis - Head of Sales'
]

const SpanComponent = ({ text }:{ text: string }) => {
    const [name, title] = text.split(' - ')
    return (
        <div className="inline-flex m-4 duration-500 hover:scale-110">
            <Card className="card w-[180px] rounded-sm">
                <CardHeader className="text-sm pb-2 tracking-tighter font-semibold">{name} <br /><span className="text-stone-400 text-xs">{title}</span></CardHeader>
                <CardContent className="text-xs text-stone-400">
                    <ul>
                        <li>...</li>
                        {/*<li>0638130142</li>*/}
                        {/*<li>robin_steeman@hotmail</li>*/}
                    </ul>
                </CardContent>
            </Card>
        </div>
        )
}

const ScrollComponent = ({ direction = 'forwards' }: { direction?: 'forwards' | 'backwards' }) => (
    <div className={`${direction === 'backwards' ? 'scrollBack' : 'scroll'} text-white relative flex overflow-hidden w-[700px]`}>
        <div className="whitespace-nowrap">
            {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
        </div>
        <div className="whitespace-nowrap">
            {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
        </div>
    </div>
)

const InfiniteScroll = () => {
    return (
        <div className="h-[500px] w-[600px] overflow-hidden relative" style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, #fff 20%, #fff 80%, transparent), linear-gradient(to bottom, transparent, #fff 20%, #fff 80%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, #fff 20%, #fff 80%, transparent), linear-gradient(to bottom, transparent, #fff 20%, #fff 80%, transparent)',
        WebkitMaskComposite: 'source-in',
        maskComposite: 'intersect',
        perspective: '300px'
    }}>
            <div className="rotate-container h-[700px] w-[700px] absolute right-[80px] -bottom-[120px]">
                <div className="scroll text-white relative flex overflow-hidden w-[700px]">
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                </div>
                <div className="scrollBack text-white relative flex overflow-hidden w-[700px]">
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                </div>
                <div className="scroll text-white relative flex overflow-hidden w-[700px]">
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                </div>
                <div className="scrollBack text-white relative flex overflow-hidden w-[700px]">
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                    <div className="whitespace-nowrap">
                        {randomPeople.map((k, i) => <SpanComponent key={i} text={k} />)}
                    </div>
                </div>
                <style jsx>{`
                    .rotate-container {
                        transform: rotateY(-10deg) rotateX(5deg) rotateZ(40deg);
                        transform-style: preserve-3d;
                    }

                    .scroll div {
                        animation: scroll 260s linear infinite;
                        animation-delay: calc(260s * -1);
                    }

                    .scrollBack div {
                        animation: scrollBack 152s linear infinite;
                        animation-delay: calc(152s * -1);
                    }

                    .scroll div:nth-child(2) {
                        animation: scroll2 260s linear infinite;
                        animation-delay: calc(260s / -2);
                    }

                    .scrollBack div:nth-child(2) {
                        animation: scrollBack2 152s linear infinite;
                        animation-delay: calc(152s / -2);
                    }

                    @keyframes scrollBack {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }

                    @keyframes scrollBack2 {
                        0% {
                            transform: translateX(-200%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    @keyframes scroll {
                        0% {
                            transform: translateX(100%);
                        }

                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    @keyframes scroll2 {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-200%);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default InfiniteScroll
