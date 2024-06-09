import { useEffect, useState } from "react";
import style from "./indes.module.css";
import useFetch from "../../hooks/useFetch";
export default function Home() {
  const [data, loading, error, refetch] = useFetch<
    {
      id_calon: number;
      nama_calon: string;
      nomor_urut: number;
    }[]
  >("/api/calon");

  useEffect(() => {
    if(localStorage.getItem("deviceID") != null) return
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const randomString =
      Math.random().toString(20).substring(2, 14) +
      Math.random().toString(20).substring(2, 14);

    const deviceID = `${userAgent}-${platform}-${randomString}`;
    localStorage.setItem('deviceID', deviceID);
  }, []);

  const [voting, setVoting] = useState<number[]>([])

  async function votingData() {
    try {
      const feting = await fetch("/api/suara", {
        method :"put",
        body : JSON.stringify({
          device_id : localStorage.getItem('deviceID'),
          id_calon : voting
        })
      })
      const json = await feting.json()
      if(feting.status >= 400) {
        alert(json.message)
        return
      }

      alert("Anda telah berhasil memvote")

      localStorage.setItem("isVote", "true")

    }catch(err) {
      console.log(err)
      alert("Terdapat Masalah dari server")
    }
  }

  return (
    <div className={style.container}>
      <div>
        <h2>Pemilihan Ketua Organisasi IPM</h2>
        {
          localStorage.getItems("is_voting") != null && 
        <h2>Terima Kasih Sudah Memilih Calon Ketua Organisasi IPM</h2>
        }
      </div>
      {loading ? (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className={style.data}>
          {data.map((el) => (
            <div>
              <h4>{el.nama_calon}</h4>
              <button className={voting.includes(el.id_calon) && style.selected} disabled={voting.length >= 9 || localStorage.getItem("is_voting" ) != null} onClick={() => {
                if(voting.includes(el.id_calon)) {
                  const newvot = voting.filter(el2 => el2 != el.id_calon)
                  setVoting([...newvot])
                  return
                }
                setVoting([...voting, el.id_calon])
              }}>Vote</button>
            </div>
          ))}
        </div>
      )}
      
        <div className={style.apply} >
          <button disabled={voting.length < 9} onClick={() => {
            votingData()
          }} >Kirim Suara</button>
        </div>

      
    </div>
  );
}
