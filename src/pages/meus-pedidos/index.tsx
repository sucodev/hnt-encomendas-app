import { NextPage } from "next";

import { compose } from 'redux'
import { withAuth } from "../../shared/authenticatedHoc";

const MeusPedidos:NextPage = () => {
    return (
        <div className={`
            max-w-[1200px] mx-auto justify-center bg-red-50
        `}>
        <h1>Minha conta</h1>
        </div>
    )
}

export default compose(withAuth)(MeusPedidos);