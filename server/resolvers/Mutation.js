function post(parent, { url, description }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createLink(
        { data: { url, description, postedBy: { connect: { id: userId } } } },
        info,
    )
}