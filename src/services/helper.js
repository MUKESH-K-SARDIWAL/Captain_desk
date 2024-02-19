import { useEffect, useRef } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function Fancybox(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}

export function formatDate(inputDate) {
    // Parse the input date string
    const dateParts = inputDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2].split(' ')[0]);

    // Create a JavaScript Date object
    const formattedDate = new Date(year, month - 1, day);

    // Format the date in the desired format
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateString = formattedDate.toLocaleDateString('en-US', options);

    return formattedDateString;
}