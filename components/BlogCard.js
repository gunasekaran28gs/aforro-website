import Link from 'next/link'
import Image from 'next/image'
export default function BlogCard({blog}) {
    const { title, slug, featuredImage, blogContent} = blog.fields;
    return(
        <div className="card">
            <Link href={'/blogs/'+ slug}>
              <div className="featured">
                <Image 
                    src={'https:' + featuredImage.fields.file.url} 
                    width="0"
                    height="0"
                    alt=""
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4 className='semi-bold'>{title}</h4>
                    <span className='underline'>Read More</span>
                </div>
                
            </div>
            </Link>
            <style jsx>{`
        .card {
          
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -10px;
          left: 0px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions span {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
        </div>
    )
}