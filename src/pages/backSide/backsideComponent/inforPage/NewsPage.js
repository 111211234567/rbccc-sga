import React, { useEffect, useState } from 'react'
import css from '../../style/shareLayout.css'
import { useAppContext } from '../../../../context/AppContext'
import BacksideNews from './BacksideNews'

const theValues = {
    title: '',
    img: '',
    description: ''
}

const NewsPage = () => {
    const [number,setNumber]=useState(0)
    const [imgs,setImgs]=useState([])
    const [values, setValues] = useState(theValues)
    const [img, setImg] = useState('')
    const { getAllNews, news, generalPost, user } = useAppContext()
    useEffect(() => {
        getAllNews()
    }, [])
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    }
    const uploadImg = async (e) => {
        const file = e.target.files[0]
        await convertBase64(file)
    }

    const convertBase64 = (file) => {
        try {
            var reader = new FileReader();
            if (file) {
                reader.readAsDataURL(file)
                reader.onload = () => {
                    var Base64 = reader.result
                    setImg(Base64)
                };
                reader.onerror = (error) => {
                    console.log("error on 64", error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const addImg=()=>{
        setImgs([...imgs,img])
        
        setNumber(number+1)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const date = new Date()
        const time = date.toLocaleDateString()
        const endpoint = {
            mainPoint: 'news'
        }
        const data = {
            title: values.title,
            img: imgs,
            description: values.description,
            userId: user.id,
            date: time
        }
        generalPost({ endpoint, data }).then(() => {
            getAllNews()
        })
    }
    return (
        <div className='' id='infor-newspage-container flex-column ' >
            <form onSubmit={onSubmitHandler} className='width-100 flex-column ai-center ji-center' >
                <div>
                    <input name='title' placeholder='title' onChange={onChangeHandler} />
                    <input name='img' type="file" placeholder='img' onChange={(e) => { uploadImg(e) }} />
                    <div className='height-10px bgc-grey b-1px-grey hover-green' onClick={()=>{addImg()}} >add img</div>
                    <div>number of imgs:{number}</div>
                </div>
                <textarea id='infor-newspage-textarea' name='description' onChange={onChangeHandler} />
                <button className='b-btn' >submit</button>
            </form>
            <div className='width-100 flex-column ai-center ji-center'>
                {news.slice(0).reverse().map((n) => {
                    return < BacksideNews News={n} />
                })}
                {/* <button onClick={()=>{console.log(news)}} >sd</button> */}
            </div>
        </div>
    )
}

export default NewsPage
