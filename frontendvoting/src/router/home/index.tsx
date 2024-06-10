import { useEffect, useMemo, useState } from "react";
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

  const [isVoting, setIsVoting] = useState(false)
  const [voting, setVoting] = useState<number[]>([])
  async function votingData() {
    try {
      const feting = await fetch("/api/suara", {
        method: "put",
        body: JSON.stringify({
          id_calon: voting
        })
      })
      const json = await feting.json()
      if (feting.status >= 400) {
        alert(json.message)
        return
      }

      setIsVoting(true)


    } catch (err) {
      console.log(err)
      alert("Terdapat Masalah dari server")
    }
  }

  useEffect(() => {


  }, []);

  return (
    <div className={style.container}>
      {
        isVoting ?
          <div style={{
            display :"flex",
            justifyContent :"center",
            alignItems :"center",
            flex : 1,
            minHeight : "100vh"
          }}>
            <h1>TERIMA KASIH VOTING ANDA TELAH DIREKAM</h1>
          </div>
          : 
          <>
          <div className={style.headers}>
            <h2>Pemilihan Formatur Organisasi IPM</h2>

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
              <img src="/profil.png" style={{
                borderRadius: "100%",
                marginTop: 20
              }} />
              <h4 style={{
                textAlign: "center"
              }}>{el.nama_calon}</h4>
              <h2 style={{
                textAlign: "center"
              }}>{el.nomor_urut}</h2>
              <button className={voting.includes(el.id_calon) && style.selected} disabled={voting.length >= 9} onClick={() => {
                if (voting.includes(el.id_calon)) {
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
      </>

      }


    </div>
  );
}
