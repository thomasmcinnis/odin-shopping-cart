import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops! Nothing here</h1>
            <p>Sorry there is nothing at this location</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
