import { Suspense } from 'react'

function LazyRouter(Component) {
    return function (props) {
        return (
            <Suspense fallback={<div>loading....</div>}>
                <Component {...props} />
            </Suspense>
        )
    }
}

export default LazyRouter