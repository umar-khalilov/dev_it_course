FROM ubuntu:21.04
RUN apt update \
        && apt install openssh-server iputils-ping -y
RUN mkdir /root/.ssh \
        && touch /root/.ssh/authorized_keys \
        && ssh-keygen -q -t rsa -N '' -f /root/.ssh/id_rsa \
        && cat /root/.ssh/id_rsa.pub > /root/.ssh/authorized_keys
ENTRYPOINT ["service","ssh","start","bin","bash"]