changequote({{,}})dnl
define(APACHE_WORKER_START_SERVERS, {{2}})dnl
define(APACHE_WORKER_MIN_SPARE_THREADS, {{2}})dnl
define(APACHE_WORKER_MAX_SPARE_THREADS, {{10}})dnl
define(APACHE_WORKER_THREAD_LIMIT, {{64}})dnl
define(APACHE_WORKER_THREADS_PER_CHILD, {{25}})dnl
define(APACHE_WORKER_MAX_REQUEST_WORKERS, {{4}})dnl
define(APACHE_WORKER_MAX_CONNECTIONS_PER_CHILD, {{0}})dnl
# worker MPM
# StartServers: initial number of server processes to start
# MinSpareThreads: minimum number of worker threads which are kept spare
# MaxSpareThreads: maximum number of worker threads which are kept spare
# ThreadLimit: ThreadsPerChild can be changed to this maximum value during a
#       graceful restart. ThreadLimit can only be changed by stopping
#       and starting Apache.
# ThreadsPerChild: constant number of worker threads in each server process
# MaxRequestWorkers: maximum number of threads
# MaxConnectionsPerChild: maximum number of requests a server process serves

<IfModule mpm_worker_module>
  StartServers           APACHE_WORKER_START_SERVERS
  MinSpareThreads        APACHE_WORKER_MIN_SPARE_THREADS
  MaxSpareThreads        APACHE_WORKER_MAX_SPARE_THREADS
  ThreadLimit            APACHE_WORKER_THREAD_LIMIT
  ThreadsPerChild        APACHE_WORKER_THREADS_PER_CHILD
  MaxRequestWorkers      APACHE_WORKER_MAX_REQUEST_WORKERS
  MaxConnectionsPerChild APACHE_WORKER_MAX_CONNECTIONS_PER_CHILD
</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet

