import app from '@/core/app'
import '@/core/router'
import { port } from '@/configs/app'

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
