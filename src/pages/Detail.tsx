import {useEffect, useState} from "react";
import {useParams} from "react-router";
import type {Post} from "./Home.tsx";


function Detail() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post>({
        body: "", id: 0, title: "", userId: 0
    });
    // Post라고 타입지정을 했으니 초기값도 {}이 아니라 Post 타입에 맞춰 넣어줘야함
    // {} 안에 커서를 두고 alt+Enter누르고 '모든 멤버 구현' 클릭하면 Type형식에 맞춰 자동으로 삽입됨
    // 보통 null 로 초기값을 넣어주는게 의도에 맞음(처음엔 받은 준비조차 안해놔야해서, 위처럼 빈값으로
    // 초기화 해두면 메모리관리나, 의도치 않은 오류가 일어나거나 할 여지가 있을 수 있으니



    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then((data: Post) => {

                setPost(data)
                setLoading(false);
            });


    }, [id]);

    return (

        <div>
            Detail
        </div>
    );
}

export default Detail;