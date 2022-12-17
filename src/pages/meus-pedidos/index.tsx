import { NextPage } from "next";

import { compose } from 'redux'
import { withAuth } from "../../shared/authenticatedHoc";

const MeusPedidos:NextPage = () => {
    return (
        <>
        <h1>Minha conta</h1>
        </>
    )
}

export default compose(withAuth)(MeusPedidos);