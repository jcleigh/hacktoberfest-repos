export default function Repos({ repos }) {
    return (
        <>
            <div>Repos</div>
            {repos && repos.data && repos.data.items ?
                repos.data.items.map((item, i) =>
                    <div key={`repo-${i}`}>
                        <ul>
                            <li key={`li-${item.full_name}`}>
                                <a href={item.html_url}>{item.full_name}</a> | Stars: {parseInt(item.stargazers_count).toLocaleString('en-US')} | Watchers: {parseInt(item.watchers_count).toLocaleString('en-US')}
                                <p style={{color: '#888', paddingLeft: '10px'}}>{item.description}</p>
                                
                            </li>
                        </ul>
                    </div>) : null}
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/github');
    const repos = await res.json();
    return { props: { repos } };
}