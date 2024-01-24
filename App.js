export default function App({ count, increase }) {

    return html`
        <div>
            <div>${count}</div>
            <button onClick="${increase}">Click!</button>
        </div>
    `
}