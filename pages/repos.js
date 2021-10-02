export default function Repos({ repos }) {
    return (
        <>
            <div>Repos</div>
            {repos && repos.data && repos.data.items ?
                repos.data.items.map((item, i) =>
                    <div key={`repo-${i}`}>{item.url}</div>) : null}
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/github');
    const repos = await res.json();
    console.log(repos);
    return { props: { repos } };
}