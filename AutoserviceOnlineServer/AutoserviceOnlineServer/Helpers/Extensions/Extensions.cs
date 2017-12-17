using System;
using System.Collections;
using System.Collections.Generic;

namespace AutoserviceOnlineServer.Helpers.Extensions
{
    public static class Extensions
    {
        public static void ForEach<T>(this IEnumerable<T> enumerable, Action<T> action)
        {
            foreach (T item in enumerable)
                action(item);
        }
    }
}